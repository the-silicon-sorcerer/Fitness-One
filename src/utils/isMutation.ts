import type { UseTRPCMutationResult } from "@trpc/react-query/dist/shared";

const isMutation = <T>(
  p: T | UseTRPCMutationResult<any, any, any, any>
): p is UseTRPCMutationResult<any, any, any, any> => {
  return (p as UseTRPCMutationResult<any, any, any, any>).mutate !== undefined;
};

export default isMutation;
