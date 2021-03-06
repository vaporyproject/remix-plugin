import { ModuleProfile, Api, API } from '../../src'
import { Transaction } from './types'

// Type
export interface Udapp extends Api {
  type: 'udapp'
  runTx(transaction: Transaction): void,
  getAccounts(): string
  createVMAccount(newAccount: {privateKey: string, balance: number}): string
}

// Profile
export const UdappProfile: ModuleProfile<Udapp> = {
  type: 'udapp',
  methods: ['runTx', 'getAccounts', 'createVMAccount']
}

// API
export class UdappApi implements API<Udapp> {
  public readonly type = 'udapp'


  private doSomeCalculation(transaction: Transaction) {
    // This method is not part of the UdappProfile.
    // You should not call it directly.
    // Here you would do some calculation for example.
  }

  public runTx(transaction: Transaction) {
    this.doSomeCalculation(transaction)
  }

  public getAccounts() {
    return '0x0000000000000000000000000000000000000000'
  }

  public createVMAccount(newAccount: {privateKey: string, balance: number}) {
    return '0x0000000000000000000000000000000000000000'
  }

}