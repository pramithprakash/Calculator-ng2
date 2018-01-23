import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

import {Operation} from '../domain/operation';
import {OperatorsEnum, Operators} from '../domain/operators';
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
    }

    public assignOperation(operation:Operation):void {

        if(!this.operation.start){
            this.operation.input1 = operation.sign;
            this.operation.sign = undefined;
            this.operation.input2 = undefined;
            this.operation.start = true;
            this.operation.result = this.operation.input1;
        }else if(!this.operation.sign){
            this.operation.operationId = operation.operationId;
            this.operation.sign = operation.sign;
            this.operation.result = undefined;
        }else if(!this.operation.result && this.operation.input1 && this.operation.sign){
            this.operation.input2 = operation.sign;
            this.operation.start = false;
            this.runOperation(this.operation);
        }
    }
    private createFormControls():void {
		this.group = this.formBuilder.group({
            'input': [this.operation.input1]
		});

	}
}
