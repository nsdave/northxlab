"use client"

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'
import { IoMdDownload } from "react-icons/io";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip"

const TransformedImage = ({
    image, type, title,
    transformationConfig, isTransforming,
    setIsTransforming, hasDownload = true
}: TransformedImageProps) => {
    const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        e.preventDefault();

        download(getCldImageUrl({
            width: image?.width,
            height: image?.height,
            src: image?.publicId,
            ...transformationConfig
        }), title)
    }

  return (
    <TooltipProvider>
        <div className='flex flex-col gap-4' >
            <div className='flex-between' >
                <h3 className='h3-bold text-kasutamu-300' >
                    Modified
                </h3>

                {
                    hasDownload && (
                        <Tooltip>
                            <TooltipTrigger>
                                <button
                                className='download-btn mr-2'
                                onClick={downloadHandler}
                                >
                                    <IoMdDownload 
                                    size={26}
                                    className='text-kasutamu-200'
                                    />
                                </button>
                            </TooltipTrigger>

                            <TooltipContent>
                                <p>Download</p>
                            </TooltipContent>
                        </Tooltip>
                    )
                }
            </div>

            {
                image?.publicId && transformationConfig ? (
                    <div className='relative' >
                        <CldImage 
                        width={getImageSize(type, image, "width")}
                        height={getImageSize(type, image, "height")}
                        src={image?.publicId}
                        alt={image.title}
                        sizes={"(max-width: 767px) 100vw 50vw"}
                        placeholder={dataUrl as PlaceholderValue}
                        className='transformed-image'
                        onLoad={() => {
                            setIsTransforming && setIsTransforming(false)
                        }}
                        onError={() => {
                            debounce(() => {
                                setIsTransforming && setIsTransforming(false)
                            }, 8000)()
                        }}
                        {...transformationConfig}
                        />

                        {
                            isTransforming && (
                                <div className='transfroming-loader' >
                                    <Image
                                    src={"/assets/icons/spinner.svg"}
                                    width={50}
                                    height={50}
                                    alt='Modifying' 
                                    />
                                    <p className='text-white/80' >Please wait...</p>
                                </div>
                            )
                        }
                    </div>
                ) : (
                    <div className='transformed-placeholder' >
                        Modified Image
                    </div>
                )
            }
        </div>

    </TooltipProvider>
  )
}

export default TransformedImage