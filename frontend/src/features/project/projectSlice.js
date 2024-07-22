import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import projectService from "./projectService";

const projectSlice = createSlice({
  name: "project",
  initialState: {
    isSuccess: false,
    isError: false,
    isLoading: false,
    projects: [],
    project: {},
    message: "",
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProjects.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(getProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.projects = action.payload;
      })
      .addCase(getProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.payload;
      });
  },
});

export default projectSlice.reducer;

// GET ALL PROJECTS
export const getProjects = createAsyncThunk(
  "FETCH/PROJECTS",
  async (_, thunkAPI) => {
    const token = await thunkAPI.getState().auth.user.token;

    try {
      return await projectService.fetchProjects(token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Add Projects

export const addProjects = createAsyncThunk(
  "ADD/PROJECTS",
  async (formData, thunkAPI) => {
    console.log(formData);
    await projectService.addProjects(formData);
    // await projectService.addProjects(formData);
    try {
      // const token = await thunkAPI.getState().auth.user.token;
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// export const getCreateDocument = createAsyncThunk(
//   "CREATE/DOCUMENT",
//   async (formData, thunkAPI) => {
//     try {
//       const token = await thunkAPI.getState().auth.user.token;
//       return await documentService.createDocument(formData, token);
//     } catch (error) {
//       const message = error.response.data.message;
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );
