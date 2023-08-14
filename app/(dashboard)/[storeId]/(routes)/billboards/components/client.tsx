'use client'

import { Heading } from '@/components/ui/heading'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import { Plus } from "lucide-react";



export const BillboardClient = () => {
	return (
		<>
			<div className='flex items-center justify-between'>
				<Heading
					title='billboards (0)'
					description='Manage billboards for your store'
				/>
				<Button>
					<Plus className='mr-2 h-4 w-4' /> Add New
				</Button>
			</div>
         <Separator />
		</>
	)
}
