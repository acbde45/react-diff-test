declare interface IPosition {
  x: number;
  y: number;
}

declare interface ICLineNode {
  id: string;
  type: 'Line' | 'Cicle',
  source: string;
  target: string;
}

declare interface ILineNode extends ICLineNode {
  start: IPosition;
  end: IPosition;
}

declare interface ICicleNode {
  id: string;
  type: 'Line' | 'Cicle',
  text: string;
	position: IPosition;
  children: ICicleNode[];
}

declare type TNode = ILineNode | ICicleNode;
declare type ICCicleNode = ICicleNode;
declare type TCNode = ICLineNode | ICCicleNode;
