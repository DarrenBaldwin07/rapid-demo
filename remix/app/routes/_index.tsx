import type { V2_MetaFunction } from '@remix-run/react';
import { useLoaderData } from '@remix-run/react';
import { Welcome } from '@rapid-web/react';
import { Heading } from '@rapid-web/ui';
import { bolt } from '../root';
import { routes } from '../../../bindings';

export const meta: V2_MetaFunction = () => {
	return [
		{
			title: 'RAPID -- The intersection between developer experience and scalability',
		},
	];
};

export const loader = async () => {
	const req = await bolt('lolRoute').post(routes.lolRoute);

	return req.data;
};

export default function Index() {
	const data = useLoaderData();

	return (
		<div>
			<Welcome>
				<Heading styles='mt-6 font-bold' size='md'>
					{data}
				</Heading>
			</Welcome>
		</div>
	);
}
