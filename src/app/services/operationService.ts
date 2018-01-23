import {Injectable} from "@angular/core";
import {Operation} from '../domain/operation';
import {OperatorsEnum} from '../domain/operators';

/**
 * The OperationService is responsible for handling all calculations.
 * It uses the Operation object to find what the requested operation is and then using the inputs,
 * performs the calculation. The calculated result is returned.
 */
@Injectable()
export class OperationService {

    public runOperation(operation:Operation):any {

        var num1:number = Number.parseFloat(operation.input1.toString());
        var num2:number = Number.parseFloat(operation.input2.toString());
        var operator:number = Number.parseFloat(operation.operationId.toString());

        switch(operator) {
            case OperatorsEnum.addition: return num1 + num2;
            case OperatorsEnum.subtraction: return num1 - num2;
            case OperatorsEnum.multiplication: return num1 * num2;
            case OperatorsEnum.division: return num1 / num2;
            default: return 0;
        }
    }

}
