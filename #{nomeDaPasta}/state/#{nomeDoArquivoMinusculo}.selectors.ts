import { createFeatureSelector, createSelector } from '@ngrx/store';
import { #{nomeDaClasseMaiusculo}State, #{nomeDoArquivoMinusculo}StateFeatureKey } from './#{nomeDoArquivoMinusculo}.reducer';

export const seleciona#{nomeDaClasseMaiusculo}State = createFeatureSelector<#{nomeDaClasseMaiusculo}State>(#{nomeDoArquivoMinusculo}StateFeatureKey);

export const selecionaIsLoading = createSelector(
  seleciona#{nomeDaClasseMaiusculo}State,
  (state: #{nomeDaClasseMaiusculo}State): boolean => state.isLoading
);

export const selecionaState = createSelector(
  seleciona#{nomeDaClasseMaiusculo}State,
  (state: #{nomeDaClasseMaiusculo}State): any => state.#{nomeDoArquivoMinusculo}
);
