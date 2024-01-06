import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { exerciseOptions, fetchData, youtubeOptions } from "../utils/FetchData";
import Details from "../components/Details";
import SimilarExercises from "../components/SimilarExercises";
import ExerciseVideos from "../components/ExerciseVideos";

function ExerciseDetail() {
  // check why they initiated use state with an object
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [youtubeDetail, setYoutubeDetail] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      const exerciseDbUrl = "https://exercisedb.p.rapidapi.com";
      const youtubeSearchUrl =
        "https://youtube-search-and-download.p.rapidapi.com";

      const exerciseDetailData = await fetchData(
        `${exerciseDbUrl}/exercises/exercise/${id}`,
        exerciseOptions
      );

      setExerciseDetail(exerciseDetailData);

      const exerciseVideosData = await await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name} exercise`,
        youtubeOptions
      );

      setYoutubeDetail(exerciseVideosData);

      const targetMuscleExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      console.log(targetMuscleExercisesData);
      setTargetMuscleExercises(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exerciseDbUrl}/exercises/target/${exerciseDetailData.target}`,
        exerciseOptions
      );
      setEquipmentExercises(equipmentExercisesData);
    };

    fetchExercisesData();
  }, [id]);
  return (
    <Box>
      <Details exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={youtubeDetail}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
}

export default ExerciseDetail;
