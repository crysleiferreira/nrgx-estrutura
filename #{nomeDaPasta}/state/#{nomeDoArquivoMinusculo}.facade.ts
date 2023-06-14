import { Injectable } from "@angular/core";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { distinctUntilChanged, filter, take } from "rxjs/operators";
import {
  limpaState,
  salvarState,
} from "./#{nomeDoArquivoMinusculo}.actions";
import {
  selecionaIsLoading,
  selecionaState,
} from "./#{nomeDoArquivoMinusculo}.selectors";

@Injectable({
  providedIn: "root",
})
export class #{nomeDaClasseMaiusculo}Facade {
  constructor(private store: Store) {}

  limpaState() {
    this.store.dispatch(limpaState());
  }

  selecionaIsLoading(): Observable<boolean> {
    return this.selecionaIsLoading$().pipe(take(1));
  }

  selecionaIsLoading$(): Observable<boolean> {
    return this.store.select(selecionaIsLoading).pipe(distinctUntilChanged());
  }

  salvarState(payload: any) {
    this.store.dispatch(salvarState({ payload }));
  }

  selecionaState(): Observable<any> {
    return this.selecionaState$().pipe(take(1));
  }

  selecionaState$(): Observable<any> {
    return this.store.select(selecionaState).pipe(
      distinctUntilChanged(),
      filter((data) => !!data)
    );
  }
}
