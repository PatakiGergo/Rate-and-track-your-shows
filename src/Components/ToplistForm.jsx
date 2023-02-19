import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { ToplistContext } from "@/context/toplist-context";
import { TracklistContext } from "@/context/tracklist-context";

export default function ToplistForm(props) {
  const toplistContext = useContext(ToplistContext);
  const tracklistContext = useContext(TracklistContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const userReview = {
      ...data,
      overall_user_score:
        (Number(data.plot) +
          Number(data.music) +
          Number(data.characters) +
          Number(data.acting) +
          Number(data.overall_experience)) /
        5,
    };
    toplistContext.addMovie(props.name, props.id, props.img, userReview);
    props.handleModal();
    props.handleSuccess();
    tracklistContext.remove(props.id);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <h1>Rate the show!</h1>
      <label htmlFor="">Plot:</label>
      <input
        type="range"
        placeholder="Plot"
        {...register("plot", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Characters:</label>
      <input
        type="range"
        placeholder="Characters"
        {...register("characters", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Music:</label>
      <input
        type="range"
        placeholder="Music"
        {...register("music", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Acting:</label>
      <input
        type="range"
        placeholder="Acting"
        {...register("acting", { required: true, max: 100, min: 1 })}
      />
      <label htmlFor="">Overall Experience:</label>
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
      <textarea {...register("review", {})} rows="10" cols="40" />
      <label htmlFor="">What I liked: </label>
      <textarea {...register("liked", {})} rows="5" cols="40" />
      <label htmlFor="">What I disliked: </label>
      <textarea {...register("disliked", {})} rows="5" cols="40" />

      <div className="recommend">
        <label htmlFor="">Would you recommend?</label>
        <div>
          <label htmlFor="">Yes</label>
          <input
            {...register("recommendation", { required: true })}
            type="radio"
            value="Yes"
          />
        </div>
        <div>
          <label htmlFor="">Maybe</label>
          <input
            {...register("recommendation", { required: true })}
            type="radio"
            value="Maybe"
          />
        </div>
        <div>
          <label htmlFor="">No</label>
          <input
            {...register("recommendation", { required: true })}
            type="radio"
            value=" No"
          />
        </div>
      </div>

      <button>Submit</button>
    </form>
  );
}
