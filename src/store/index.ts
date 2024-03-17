import rootReducer from 'core/reducer'

export * from './actions'

export type RootState = ReturnType<typeof rootReducer>;
