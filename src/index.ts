import { FILTERS } from "./consts";
import { CalculatePayment, DailyParams, Filters } from "./types";

/**
 * La clase `PayCraft` proporciona métodos para calcular los montos de pago en base a diferentes frecuencias.
 *
 * Esta clase está diseñada para ser utilizada como una utilidad para aplicaciones que necesitan calcular pagos recurrentes.
 * Soporta frecuencias de pago diarias, semanales, quincenales y mensuales.
 */
class PayCraft {
  /**
   * Un diccionario que contiene funciones para calcular pagos para diferentes frecuencias.
   *
   * Cada clave en el diccionario corresponde a una frecuencia de pago (por ejemplo, "diario", "semanal"),
   * y el valor es una función que toma un conjunto de parámetros y devuelve el monto de pago calculado.
   *
   * @throws {Error} si se proporciona una frecuencia no válida.
   */
  public static calculate: CalculatePayment = {
    daily: (params) => PayCraft.calculateDaily(params),
    weekly: (params) => 1,
    biweekly: (params) => 1,
    monthly: (params) => 1,
  };

  /**
   * Calcula el monto del pago diario en base a los parámetros proporcionados.
   *
   * @param {DailyParams} params - Un objeto que contiene el monto a pagar y la frecuencia de pago deseada.
   * @returns {number} El monto del pago diario calculado.
   *
   * @throws {Error} si se proporciona una frecuencia no válida.
   */
  private static calculateDaily({
    amount,
    frequencyPayment,
    filter,
  }: DailyParams): number {
    this._validateFrequency(frequencyPayment);
    if (filter) this._validateFilter(filter);

    return 1;
  }

  /**
   * Calcula el monto del pago semanal en base a los parámetros proporcionados.
   *
   * @param {DailyParams} params - Un objeto que contiene el monto a pagar y la frecuencia de pago deseada.
   * @returns {number} El monto del pago semanal calculado.
   *
   * @throws {Error} si se proporciona una frecuencia no válida.
   */
  // private static calculateWeekly({
  //   amount,
  //   frequencyPayment,
  //   filter,
  // }: DailyParams): number {
  //   this._validateFrequency(frequencyPayment);
  //   if (filter) this._validateFilter(filter);
  //
  //   return 1;
  // }

  /**
   * Calcula el monto del pago quincenal en base a los parámetros proporcionados.
   *
   * @param {DailyParams} params - Un objeto que contiene el monto a pagar y la frecuencia de pago deseada.
   * @returns {number} El monto del pago quincenal calculado.
   *
   * @throws {Error} si se proporciona una frecuencia no válida.
   */
  // private static calculateBiweekly({
  //   amount,
  //   frequencyPayment,
  //   filter,
  // }: DailyParams): number {
  //   this._validateFrequency(frequencyPayment);
  //   if (filter) this._validateFilter(filter);
  //
  //   return 1;
  // }

  /**
   * Calcula el monto del pago mensual en base a los parámetros proporcionados.
   *
   * @param {DailyParams} params - Un objeto que contiene el monto a pagar y la frecuencia de pago deseada.
   * @returns {number} El monto del pago mensual calculado.
   *
   * @throws {Error} si se proporciona una frecuencia no válida.
   */
  // private static calculateMonthly({
  //   amount,
  //   frequencyPayment,
  //   filter,
  // }: DailyParams): number {
  //   this._validateFrequency(frequencyPayment);
  //   if (filter) this._validateFilter(filter);
  //
  //   return 1;
  // }

  /**
   * Valida la frecuencia proporcionada para asegurar que sea compatible con esta clase.
   *
   * @param {string} frequency - La frecuencia a validar.
   * @throws {Error} si la frecuencia es inválida.
   */
  private static _validateFrequency(frequency: string): void {
    if (!Object.keys(PayCraft.calculate).includes(frequency)) {
      throw new Error(`Frecuencia inválida: ${frequency}`);
    }
  }

  /**
   * Valida el filtro proporcionado para asegurar que sea compatible con esta clase.
   *
   * @param {string} filter - Filtra el resultado
   * @throws {Error} si el filtro es inválido.
   */
  private static _validateFilter(filter: Filters): void {
    if (!Object.values(FILTERS).includes(filter)) {
      throw new Error(`Filtro invalido: ${filter}`);
    }
  }
}

export default PayCraft;
