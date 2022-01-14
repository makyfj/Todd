import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { useForm, SubmitHandler } from "react-hook-form";

import Spinner from "./spinner";

interface VoteIdeaProps {
  id: string;
}

interface VoteIdeaInputs {
  id: string;
}

const VOTE_IDEA = gql`
  mutation VoteIdea($ideaId: String!) {
    voteIdea(ideaId: $ideaId) {
      ideaId
      id
    }
  }
`;

const VoteIdeaForm = ({ id }: VoteIdeaProps) => {
  const [voteIdea, { data, loading, error }] = useMutation(VOTE_IDEA);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VoteIdeaInputs>();

  const onSubmit: SubmitHandler<VoteIdeaInputs> = (data) => {
    data.id = id;
    console.log(data);
  };

  if (loading) return <Spinner />;

  if (error)
    return (
      <p className="text-center font-bold text-xl text-red-500">
        Server is currently unavailable :(
      </p>
    );
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hidden">
          <input type="text" {...register("id")} defaultValue={id} />
        </div>
        <div className="flex flex-col items-center justify-center py-2">
          <button
            type="submit"
            className="w-40 bg-slate-100 border font-bold text-lg text-slate-800 rounded hover:bg-slate-400"
          >
            Vote
          </button>
        </div>
      </form>
    </>
  );
};

export default VoteIdeaForm;
