import { useForm, SubmitHandler } from "react-hook-form";

import { trpc } from "@/utils/trpc";

interface IdeaInput {
  title: string;
  content: string;
  imageUrl: string;
  votes: number;
}

const Idea = () => {
  const { register, handleSubmit } = useForm<IdeaInput>();

  // const createIdea = trpc.useMutation("idea.createIdea");

  const onSubmit: SubmitHandler<IdeaInput> = async (data) => {
    console.log(data);
    // try {
    //   const idea = await createIdea.mutateAsync(data);
    //   if (idea) {
    //     console.log(idea);
    //   }
    // } catch {}
  };

  return (
    <div>
      <div className="max-w-md mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-2 p-4 rounded bg-slate-300"
        >
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            {...register("title", { required: true })}
            className="rounded bg-slate-100"
          />
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            rows={3}
            cols={4}
            {...register("content", { required: true })}
            className="rounded bg-slate-100"
          />
          <label htmlFor="imageUrl">Image Url</label>
          <input
            id="imageUrl"
            type="url"
            {...register("imageUrl", { required: true })}
            className="rounded bg-slate-100"
          />
          <label htmlFor="votes">Votes</label>
          <input
            id="votes"
            type="number"
            {...register("votes", { required: true, valueAsNumber: true })}
            className="rounded bg-slate-100"
          />
          <div className="flex justify-center">
            <button className="p-2 rounded bg-slate-600 text-slate-100">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Idea;
