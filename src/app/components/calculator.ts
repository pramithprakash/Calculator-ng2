import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {Operation} from './operation';
import {OperatorsEnum, Operators} from './operators';
import {OperationService} from '../services/operationService';

@Component({
    selector: 'calculator',
    templateUrl: 'calculator.html',
    styleUrls: ['calculator.css']
})
export class CalculatorComponent {
    public group:FormGroup;
    public operation:Operation;
    public operators = Operators.operatorList;

    constructor(private formBuilder:FormBuilder, private operationService:OperationService) {
	}

    ngOnInit() {
        this.operation = new Operation();
		this.createFormControls();
    }

    public runOperation(operation:Operation):void {
        operation.result = this.operationService.runOperation(operation);
        this.fontStyling();
    }

    public fontStyling():void {
        var result = this.operation.result ? this.operation.result.toString() : false;
        if( result.length > 20){
            this.operation.done = true;
            this.operation.input1 = '';
            this.operation.input2 = '';
            this.operation.sign = '';
            this.operation.result = 'ERROR';
            this.operation.fontSize = '180%';
        } else if( result.length >= 10){
            this.operation.fontSize = '100%';
        } else if( result.length === 9){
            this.operation.fontSize = '110%';
        } else if( result.length === 8){
            this.operation.fontSize = '120%';
        } else if( result.length === 7){
            this.operation.fontSize = '130%';
        } else if( result.length === 6){
            this.operation.fontSize = '150%';
        } else if( result.length === 5){
            this.operation.fontSize = '180%';
        } else if( result.length === 4){
            this.operation.fontSize = '220%';
        } else if( result.length <= 3){
            this.operation.fontSize = '300%';
        }
    }

    public assignOperation(operation:Operation):void {

        if(this.operation.done && operation.operationId === 5){
            this.operation.input1 = this.operation.result;
            this.runOperation(this.operation);
            return;
        }else if(this.operation.done && operation.operationId < 5){
            this.operation.input1 = this.operation.result;
            this.operation.input2 = '';
            this.operation.operationId = operation.operationId;
            this.operation.sign = operation.sign;
            this.operation.result = undefined;
            this.operation.done = false;
            return;
        }

        if((!operation.operationId && !this.operation.sign) || this.operation.done){
            if(this.operation.done){
                this.operation.done = false;
                this.operation.input1 = '';
                this.operation.input2 = '';
                this.operation.sign = '';
            }
            this.operation.input1 = this.operation.input1 + operation.sign.toString();
            this.operation.result = this.operation.input1;
        }else if(operation.operationId && operation.operationId < 5){
            
            if( this.operation.input1 && this.operation.input2 ){
                this.runOperation(this.operation);
                this.operation.input1 = this.operation.result;
                this.operation.sign = operation.sign;
                this.operation.input2 = '';
            }
            
            this.operation.operationId = operation.operationId;
            this.operation.sign = operation.sign;
            this.operation.result = undefined;
        }else if(!operation.operationId && this.operation.sign){
            this.operation.input2 = this.operation.input2 + operation.sign.toString() ;
            this.operation.result = this.operation.input2;
        }
        else if(operation.operationId === 5){
            this.operation.done = true;
            this.runOperation(this.operation);
        }
        this.fontStyling();
    }
    private createFormControls():void {
        this.operation.input1 = '';
        this.operation.input2 = '';
		this.group = this.formBuilder.group({
            'input': [this.operation.input1]
		});

	}
}
