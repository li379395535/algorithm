export default {};
// /**
//  * 1+2+3
//  *    数值入栈  操作符入栈
//  * 1：    1
//  * 2：            +
//  * 3：    2
//  * 4：            +
//  * 5：    3
//  *
//  * 1+2*3
//  *    数值入栈  操作符入栈
//  * 1：    1
//  * 2：            +
//  * 3：    2
//  * 4：            *
//  * 5：    3
//  *
//  */

// import Stack from './Stack';

// interface ICalculator {
//   readonly Result: number,
//   CalCulate(input: string): void,
// }

// enum OperatorType {
//   Plus = '+', Minus = '-', Multiple ='*', Divide = '/'
// }


// class CalCulator implements ICalculator {
//   private result: number;

//   private valueStack: Stack<number>;

//   private operatorStack: Stack<string>;

//   constructor() {
//     this.result = 0;
//     this.valueStack = new Stack();
//     this.operatorStack = new Stack();
//   }

//   public get Result() : number {
//     return this.result;
//   }

//   CalCulate(input: string): void {
//     if (input?.length > 0) {
//       const chars = input.split('');
//       chars.forEach((char) => {
//         if (/\d/.test(char)) {
//           this.valueStack.Push(Number(char));
//         } else if (/[+-*/()]/.test(char)) {
//           this.StackInOperator(char);
//         }
//       });
//       this.calculate();
//       this.result = this.valueStack.Pop();
//     }
//   }

//   private StackInOperator(currentOpt: string) {
//     try {
//       const prevOpt = this.operatorStack.Peek();
//       switch (currentOpt) {
//         case OperatorType.Plus:
//           this.calculate();
//           break;
//         case OperatorType.Minus:
//           this.calculate();
//           break;
//         case OperatorType.Multiple:
//           if (prevOpt === OperatorType.Multiple || prevOpt === OperatorType.Divide) {
//             this.calculate();
//           }
//           this.operatorStack.Push(currentOpt);
//           break;
//         case OperatorType.Divide:
//           if (prevOpt === OperatorType.Multiple || prevOpt === OperatorType.Divide) {
//             this.calculate();
//           }
//           this.operatorStack.Push(currentOpt);
//           break;
//         default:
//           break;
//       }
//     } catch (error) {
//       console.warn(error);
//     }
//   }

//   private calculate() {
//     try {
//       const operator = this.operatorStack.Pop();
//       const value1 = this.valueStack.Pop();
//       const value2 = this.valueStack.Pop();
//       const result = this.calculateNum(operator, value1, value2);
//       this.valueStack.Push(result);
//     } catch (error) {
//       console.warn(error);
//     }
//   }

//   private calculateNum(operator: string, value1: number, value2: number): number {
//     let value = 0;
//     switch (operator) {
//       case OperatorType.Plus:
//         value = value1 + value2;
//         break;
//       case OperatorType.Minus:
//         value = value1 - value2;
//         break;
//       case OperatorType.Multiple:
//         value = value1 * value2;
//         break;
//       case OperatorType.Divide: {
//         if (value2 === 0) {
//           throw new Error();
//         } else {
//           value = value1 / value2;
//           break;
//         }
//       }
//       default:
//         break;
//     }

//     return value;
//   }

// }

// export default CalCulator;
