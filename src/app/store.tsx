import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../api/questionsSlice';

export default configureStore({
  reducer: { questions: questionsReducer },
});
