import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { limpaState, salvarState } from './#{nomeDoArquivoMinusculo}.actions';

export interface #{nomeDaClasseMaiusculo}State {
  isLoading: boolean;
  #{nomeDoArquivoMinusculo}: any;
}

export const #{nomeDoArquivoMinusculo}StateFeatureKey = '#{nomeDoArquivoMinusculo}';

export const initialState: #{nomeDaClasseMaiusculo}State = {
  isLoading: false,
  #{nomeDoArquivoMinusculo}: undefined
};

export const #{nomeDaClasseMaiusculo}Reducer: ActionReducer<#{nomeDaClasseMaiusculo}State, Action> = createReducer(
  initialState,
  on(limpaState, () => ({
    ...initialState
  })),

  on(salvarState, (state, { #{nomeDoArquivoMinusculo} }) => ({
    ...state,
    #{nomeDoArquivoMinusculo}
  }))
);
