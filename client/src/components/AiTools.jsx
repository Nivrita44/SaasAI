import React from 'react'
import { AiToolsData } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useUser } from '@clerk/clerk-react'

const AiTools = () => {
    const navigate = useNavigate()
    const user = useUser()

    return (
        <div className='px-4 sm:px-20 xl:px-32 my-24'>
            {/* Section Header */}
            <div className='text-center mb-16'>
                <h2 className='text-gray-900 text-4xl sm:text-5xl font-bold'>Powerful AI Tools</h2>
                <p className='text-gray-600 max-w-xl mx-auto mt-4 text-lg'>
                    Create, enhance, and optimize your content with cutting-edge AI technology.
                </p>
            </div>

            {/* Tools Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                {AiToolsData.map((tool, index) => {
                    // New vibrant gradient palette
                    const gradients = [
                        ['#FF6B6B', '#FFD93D'], // red → yellow
                        ['#6BCB77', '#4D96FF'], // green → blue
                        ['#FF6AD5', '#FF8C42'], // pink → orange
                        ['#845EC2', '#00C9A7'], // purple → teal
                        ['#FF9671', '#FFC75F'], // peach → yellow
                        ['#00C2FF', '#7F00FF']  // cyan → violet
                    ];
                    const gradient = gradients[index % gradients.length];

                    return (
                        <div 
                            key={index}
                            onClick={() => user && navigate(tool.path)}
                            className='group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer flex flex-col items-center text-center'
                        >
                            {/* Icon */}
                            <div 
                                className='w-16 h-16 flex items-center justify-center rounded-xl mb-6 transition-transform duration-300 group-hover:scale-110'
                                style={{ background: `linear-gradient(to bottom right, ${gradient[0]}, ${gradient[1]})` }}
                            >
                                <tool.Icon className='w-8 h-8 text-white' />
                            </div>

                            {/* Title */}
                            <h3 className='text-xl font-semibold text-gray-800 mb-2'>{tool.title}</h3>

                            {/* Description */}
                            <p className='text-gray-500 text-sm sm:text-base'>{tool.description}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default AiTools
