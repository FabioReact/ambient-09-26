import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm, Controller, type SubmitHandler } from 'react-hook-form';
import { heroSchema, type HeroFormData } from './schema';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { useMutation } from '@tanstack/react-query';
import { createHero } from '@/api/heroes';
import { toast } from 'react-toastify';
import { MultipleCombobox } from '@/components/MultipleCombobox';

const alignmentOptions = [
  { value: 'good', label: 'Good' },
  { value: 'bad', label: 'Bad' },
];
const genderOptions = [
  { value: 'male', label: 'Male' },
  { value: 'female', label: 'Female' },
  { value: '-', label: 'Unknown' },
];

const AddHero = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
    control,
  } = useForm<HeroFormData>({
    resolver: zodResolver(heroSchema),
  });

  const { mutate } = useMutation({
    mutationKey: ['create-hero'],
    mutationFn: createHero,
    onSuccess: (data) => {
      toast.success(`Hero ${data.name} created successfully`);
    },
    onError: (error) => {
      toast.error(`Unable to create hero: ${error.message}`);
    },
  });

  const onSubmitHandler: SubmitHandler<HeroFormData> = (data) => {
    mutate(data);
  };

  return (
    <section className="flex items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create character</CardTitle>
          <CardDescription>Add your favorite hero to our database</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmitHandler)}>
            <fieldset className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" type="text" {...register('name')} />
              {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input id="fullName" type="text" {...register('fullName')} />
              {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="intelligence">Intelligence</Label>
              <Input id="intelligence" type="number" {...register('intelligence')} />
              {errors.intelligence && (
                <p className="text-red-500 text-sm">{errors.intelligence.message}</p>
              )}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="strength">Strength</Label>
              <Input id="strength" type="number" {...register('strength')} />
              {errors.strength && <p className="text-red-500 text-sm">{errors.strength.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="speed">Speed</Label>
              <Input id="speed" type="number" {...register('speed')} />
              {errors.speed && <p className="text-red-500 text-sm">{errors.speed.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="durability">Durability</Label>
              <Input id="durability" type="number" {...register('durability')} />
              {errors.durability && (
                <p className="text-red-500 text-sm">{errors.durability.message}</p>
              )}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="power">Power</Label>
              <Input id="power" type="number" {...register('power')} />
              {errors.power && <p className="text-red-500 text-sm">{errors.power.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="combat">Combat</Label>
              <Input id="combat" type="number" {...register('combat')} />
              {errors.combat && <p className="text-red-500 text-sm">{errors.combat.message}</p>}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="alignment">Alignment</Label>
              <Controller
                name="alignment"
                control={control}
                render={({ field }) => (
                  <Select
                    items={alignmentOptions}
                    value={field.value ?? null}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="alignment"
                      ref={field.ref}
                      aria-invalid={!!errors.alignment}
                      className="w-full max-w-48"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select alignment</SelectLabel>
                        {alignmentOptions.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {/* combobox */}
              {errors.alignment && (
                <p className="text-red-500 text-sm">{errors.alignment.message}</p>
              )}
            </fieldset>
            <fieldset className="space-y-2">
              <Label htmlFor="gender">Gender</Label>
              <Controller
                name="gender"
                control={control}
                render={({ field }) => (
                  <Select
                    items={genderOptions}
                    value={field.value ?? null}
                    onValueChange={field.onChange}
                  >
                    <SelectTrigger
                      id="gender"
                      ref={field.ref}
                      aria-invalid={!!errors.gender}
                      className="w-full max-w-48"
                    >
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Select Gender</SelectLabel>
                        {genderOptions.map((item) => (
                          <SelectItem key={item.value} value={item.value}>
                            {item.label}
                          </SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
            </fieldset>
            <Controller
              name="aliases"
              control={control}
              render={({ field }) => (
                <MultipleCombobox
                  value={field.value ?? []}
                  onChange={field.onChange}
                  placeholder="Add Aliases..."
                />
              )}
            />
            <Button type="submit">Submit</Button>
            <Button type="reset" className="ml-auto" variant="secondary" onClick={() => reset()}>
              Reset
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
};

export { AddHero };
