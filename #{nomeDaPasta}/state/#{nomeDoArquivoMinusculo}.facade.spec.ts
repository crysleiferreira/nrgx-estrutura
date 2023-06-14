import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { StateMock, StoreMock } from 'src/app/core/mocks/store/store.mock';
import * as #{nomeDaClasseMaiusculo}Actions from './#{nomeDoArquivoMinusculo}.actions';
import { #{nomeDaClasseMaiusculo}Facade } from './#{nomeDoArquivoMinusculo}.facade';
import * as #{nomeDaClasseMaiusculo}Reducer from './#{nomeDoArquivoMinusculo}.reducer';

describe('#{nomeDaClasseMaiusculo}Facade', () => {
  let facade: #{nomeDaClasseMaiusculo}Facade;
  let store: Store<#{nomeDaClasseMaiusculo}Reducer.#{nomeDaClasseMaiusculo}State>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        #{nomeDaClasseMaiusculo}Facade,
        {
          provide: Store,
          useValue: new StoreMock({
            [#{nomeDaClasseMaiusculo}Reducer.#{nomeDoArquivoMinusculo}StateFeatureKey]: new StateMock(
              #{nomeDaClasseMaiusculo}Reducer.initialState,
              #{nomeDaClasseMaiusculo}Reducer.#{nomeDaClasseMaiusculo}Reducer
            )
          })
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
    facade = TestBed.inject(#{nomeDaClasseMaiusculo}Facade);
    store = TestBed.inject(Store);
  });

  it('Deve criar o Facade', () => {
    expect(facade).toBeTruthy();
  });

  describe('Teste dos facades com selectores', () => {
    it(`SelecionaIsLoading deve retornar false`, done => {
      facade.selecionaIsLoading().subscribe(resposta => {
        expect(resposta).toBe(false);
        done();
      });
    });
  });

  describe('Teste dos facades com Actions', () => {
    it(`salvar#{nomeDaClasseMaiusculo}Selecionada deve salvar a #{nomeDoArquivoMinusculo}`, done => {
      facade.salvar#{nomeDaClasseMaiusculo}Selecionada(1);
      facade.seleciona#{nomeDaClasseMaiusculo}().subscribe(retorno => {
        expect(retorno).toEqual(1);
        done();
      });
    });
  });

  describe('Teste de limpaState', () => {
    it(`limpaState`, () => {
      const spy = jest.spyOn(store, 'dispatch');
      facade.limpaState();
      expect(spy).toBeCalledWith(#{nomeDaClasseMaiusculo}Actions.limpaState());
    });
  });
});
