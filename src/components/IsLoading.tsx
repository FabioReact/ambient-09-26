import type { PropsWithChildren } from "react";
import { Spinner } from "./Spinner";

type Props = {
  loading?: boolean;
};


const IsLoading = ({ loading = false, children }: PropsWithChildren<Props>) => {
  if (loading) return <Spinner />;
  return children
};

export { IsLoading };
