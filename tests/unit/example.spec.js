// AAA: Arrange/Act/Assert

// Arreglar: Preparamos el sujeto de pruebas (componente/funcion)
// inicializamos variables, importamos lo necesario

// Actuar: Aplicar estimulos a los sujeros de prueba
// llamar metodos, simular clics, realizar acciones sobre el paso anterior

// Afirmar: Observar el comportamiento resultante
// resultados esperados
// que algo cambie, incremente, o no haga nada

describe('Example Component', () => {
  test('Must be greater than 10', () => {
    /// Arreglar
    let value = 5;

    // Estimulo
    value += 5;

    // Observar el resultado
    expect(value).toBeGreaterThanOrEqual(10);
  })
})
