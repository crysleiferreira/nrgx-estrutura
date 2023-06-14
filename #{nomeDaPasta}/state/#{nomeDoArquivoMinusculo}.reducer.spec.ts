import * as #{nomeDaClasseMaiusculo}Actions from './#{nomeDoArquivoMinusculo}.actions';
import * as #{nomeDaClasseMaiusculo}Reducer from './#{nomeDoArquivoMinusculo}.reducer';

describe('#{nomeDaClasseMaiusculo}Reducer', () => {
  const #{nomeDoArquivoMinusculo} = 1;

  it(`Dado o reducer
  QUando a action limpaState for disparada
  Deve limpar o estado`, () => {
    const action = #{nomeDaClasseMaiusculo}Actions.limpaState();
    const retorno = #{nomeDaClasseMaiusculo}Reducer.#{nomeDaClasseMaiusculo}Reducer(#{nomeDaClasseMaiusculo}Reducer.initialState, action);
    expect(retorno).toEqual({
      ...#{nomeDaClasseMaiusculo}Reducer.initialState
    });
  });

  it(`Dado o reducer
  QUando a action salvar#{nomeDaClasseMaiusculo} for disparada
  Deve salvar a #{nomeDoArquivoMinusculo}`, () => {
    const action = #{nomeDaClasseMaiusculo}Actions.salvar#{nomeDaClasseMaiusculo}({ #{nomeDoArquivoMinusculo} });
    const retorno = #{nomeDaClasseMaiusculo}Reducer.#{nomeDaClasseMaiusculo}Reducer(#{nomeDaClasseMaiusculo}Reducer.initialState, action);
    expect(retorno).toEqual({
      ...#{nomeDaClasseMaiusculo}Reducer.initialState,
      #{nomeDoArquivoMinusculo}
    });
  });
});
