import * as React from 'react'
import Cicle from '../Cicle'
import Line from '../Line'
import './index.scss'

interface IPaperProps {
	data: TCNode[];
}

function Node(node: TNode) {
	if (node.type === 'Cicle') {
		return (
			<Cicle key={node.id} text={(node as ICicleNode).text} position={(node as ICicleNode).position}>
				{Array.isArray((node as ICicleNode)?.children) && (node as ICicleNode)?.children.map(Node)}
			</Cicle>
		)
	}
	if (node.type === 'Line') {
		return (
			<Line key={node.id} start={(node as ILineNode).start} end={(node as ILineNode).end} />
		)
	}
	return null
}

function findNodeById(data: TCNode[], id: string): ICCicleNode | null {
	for (let i = 0; i < data.length; i++) {
		const node = data[i];
		if (node.id == id) {
			return node as ICCicleNode;
		}
		if (Array.isArray((node as ICicleNode).children)) {
			return findNodeById((node as ICicleNode).children, id);
		}
	}
	return null;	
}

export default function Paper({ data }: IPaperProps) {
	if (!data) {
		return null
	}
	const nodeList: TNode[] = data.reduce((pre: TCNode[], cur: TCNode) => {
		const clone: TNode  = { ...cur, start: { x: 0, y: 0 }, end: { x: 0, y: 0 } };
		if (cur.type === 'Line') {
			const source = findNodeById(data as TCNode[], (cur as ICLineNode).source);
			const target = findNodeById(data as TCNode[], (cur as ICLineNode).target);
			if (source) {
				(clone as ILineNode).start = source.position;
			}
			if (target) {
				(clone as ILineNode).end = target.position;
			}
		}
		return [...pre, clone]
	}, []) as TNode[]

	let dom = nodeList.map(Node)

	return (
		<div className="paper" style={{ width: 1000, height: 600 }}>
			{dom}
		</div>
	)
}
