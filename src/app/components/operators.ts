export enum OperatorsEnum {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine,
    zero,
    addition= 1,
    subtraction=2,
    multiplication=3,
    division=4,
    equals=5
}

export class Operators {
    static operatorList: Array<any> = [
        {'id': OperatorsEnum.one, 'name': 'One', sign: '1'},
        {'id': OperatorsEnum.two, 'name': 'Two', sign: '2'},
        {'id': OperatorsEnum.three, 'name': 'Three', sign: '3'},
        {'id': OperatorsEnum.division, 'name': 'Division', sign: '/', 'operationId':4, class: 'operation'},
        {'id': OperatorsEnum.four, 'name': 'Four', sign: '4'},
        {'id': OperatorsEnum.five, 'name': 'Five', sign: '5'},
        {'id': OperatorsEnum.six, 'name': 'Six', sign: '6'},
        {'id': OperatorsEnum.multiplication, 'name': 'Multiplication', sign: '*', 'operationId':3, class: 'operation'},
        {'id': OperatorsEnum.seven, 'name': 'Seven', sign: '7'},
        {'id': OperatorsEnum.eight, 'name': 'Eight', sign: '8'},
        {'id': OperatorsEnum.nine, 'name': 'Nine', sign: '9'},
        {'id': OperatorsEnum.subtraction, 'name': 'Subtraction', sign: '-', 'operationId':2, class: 'operation'},
        {'id': OperatorsEnum.zero, 'name': 'Zero', sign: '0'},
        {'id': OperatorsEnum.equals, 'name': 'Equals', sign: '=', 'operationId':5, class: 'operation equals'},
        {'id': OperatorsEnum.addition, 'name': 'Addition', sign: '+', 'operationId':1, class: 'operation'}
    ];
}
