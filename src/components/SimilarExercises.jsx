import React from "react";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";
import { Box, Typography, Stack } from "@mui/material";
function SimilarExercises({ targetMuscleExercises, equipmentExercises }) {
  return (
    <Box sx={{ mt: { lg: "100px", xs: "0" } }}>
      <Typography
        sx={{ fontSize: { xs: "35px" } }}
        fontFamily="Alegreya"
        mb={2}
        variant="h3">
        Exercises that Target same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {targetMuscleExercises.length ? (
          <HorizontalScrollbar data={targetMuscleExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography
        sx={{ fontSize: { xs: "35px" } }}
        fontFamily="Alegreya"
        mb={2}
        variant="h3">
        Exercises that use the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {equipmentExercises.length ? (
          <HorizontalScrollbar data={equipmentExercises} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
}

export default SimilarExercises;
