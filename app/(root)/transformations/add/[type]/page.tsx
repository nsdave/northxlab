import Header from '@/components/shared/Header'
import TransformationForm from '@/components/shared/TransformationForm'
import { transformationTypes } from '@/constants'
import React from 'react'

const AddTransformationTypePage = ({ params: { type } }: SearchParamProps) => {
  const transfromation = transformationTypes[type]

  return (
    <>
      <Header 
        title={transfromation.title}
        subtitle={transfromation.subTitle}
      />

      <section className='mt-10' >
        <TransformationForm 
        action="Add"
        type={transfromation.type as TransformationTypeKey}
        />
      </section>
    </>
  )
}

export default AddTransformationTypePage