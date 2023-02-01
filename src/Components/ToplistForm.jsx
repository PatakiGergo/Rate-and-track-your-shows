import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToplistContext } from "@/context/toplist-context";

export default function ToplistForm(props) {
  const toplistContext = useContext(ToplistContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    toplistContext.addMovie(props.name, props.imdbID, data);
    props.handleModal();
    console.log(data);
  };
  console.log(errors);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="">Plot</label>
      <input
        type="range"
        placeholder="Plot"
        {...register("plot", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Characters</label>
      <input
        type="range"
        placeholder="Characters"
        {...register("characters", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Music</label>
      <input
        type="range"
        placeholder="Music"
        {...register("music", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Acting</label>
      <input
        type="range"
        placeholder="Acting"
        {...register("acting", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Overall Experience</label>
      <input
        type="range"
        placeholder="Overall experience"
        {...register("overall_experience", {
          required: true,
          max: 100,
          min: 1,
        })}
      />
      <label htmlFor="">Write your review: </label>
      <textarea {...register("review", {})} />
      <label htmlFor="">What I liked: </label>
      <textarea {...register("liked", {})} />
      <label htmlFor="">What I disliked: </label>
      <textarea {...register("disliked", {})} />

      <label htmlFor="">Would you recommend?</label>
      <label htmlFor="">Yes</label>
      <input
        {...register("recommendation", { required: true })}
        type="radio"
        value="Yes"
      />
      <label htmlFor="">Maybe</label>
      <input
        {...register("recommendation", { required: true })}
        type="radio"
        value="Maybe"
      />
      <label htmlFor="">No</label>
      <input
        {...register("recommendation", { required: true })}
        type="radio"
        value=" No"
      />

      <input type="submit" />
    </form>
  );
}
