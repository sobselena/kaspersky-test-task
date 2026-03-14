import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { User } from '../../types/user';

const initialState: User = {
  id: null,
  name: '',
  email: '',
  phone: '',
  jobType: '',
};
const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setId(state, { payload }: PayloadAction<{ id: string | null }>) {
      state.id = payload.id;
    },
  },
});

export const { setId } = userSlice.actions;
export default userSlice.reducer;
