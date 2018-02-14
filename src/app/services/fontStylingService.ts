import {Injectable} from "@angular/core";
import {Operation} from '../components/operation';
import {OperatorsEnum} from '../components/operators';

/**
 * The OperationService is responsible for handling all calculations.
 * It uses the Operation object to find what the requested operation is and then using the inputs,
 * performs the calculation. The calculated result is returned.
 */
@Injectable()
export class FontStylingService {

    public fontStyling(operation:Operation):any {

        var result = operation.result ? operation.result.toString() : false;
        if( result.length > 20){
            operation.done = true;
            operation.input1 = '';
            operation.input2 = '';
            operation.sign = '';
            operation.result = 'ERROR';
            operation.fontSize = '180%';
        } else if( result.length >= 10){
            operation.fontSize = '100%';
        } else if( result.length === 9){
            operation.fontSize = '110%';
        } else if( result.length === 8){
            operation.fontSize = '120%';
        } else if( result.length === 7){
            operation.fontSize = '130%';
        } else if( result.length === 6){
            operation.fontSize = '150%';
        } else if( result.length === 5){
            operation.fontSize = '180%';
        } else if( result.length === 4){
            operation.fontSize = '220%';
        } else if( result.length <= 3){
            operation.fontSize = '300%';
        }

        return operation.fontSize;
    }
}
