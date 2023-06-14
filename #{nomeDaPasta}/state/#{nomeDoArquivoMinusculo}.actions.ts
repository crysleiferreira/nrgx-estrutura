import { createAction, props } from "@ngrx/store";

export const limpaState = createAction(
  "[#{nomeDaClasseMaiusculo}] Limpa state"
);

export const salvarState = createAction(
  "[#{nomeDaClasseMaiusculo}] Salvar State",
  props<{ payload: any }>()
);
