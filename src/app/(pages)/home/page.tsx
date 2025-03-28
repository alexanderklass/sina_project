'use client';
import FontText from '@/app/components/FontText';
import TitleFontText from '@/app/components/TitleFontText';
import ColorSection from '@/app/components/ColorSection';

import penStock from '@/app/assets/images/home/pen-stock.jpg';
import profilePicStock from '@/app/assets/images/home/woman-stock.jpg';

import React from 'react';
import TextSection from '@/app/components/TextSection';
import ImageSection from '@/app/components/ImageSection';
import GreenButterfly from '@/app/components/details/GreenButterfly';
import PinkButterfly from '@/app/components/details/PinkButterfly';
import GreenGrass from '@/app/components/details/GreenGrass';

export default function Home() {
    return (
        <main>
            <ColorSection direction={'col-reverse'}>
                <ImageSection
                    vertical={true}
                    color={'bg-pastel-beige'}
                    src={profilePicStock}
                    alt={'close up from woman'}
                />
                <div
                    className={
                        'mt-[56px] lg:mt-0 w-full h-full flex flex-col items-center justify-center py-5 md:py-0 px-5 sm:px-0'
                    }
                >
                    <div className={'space-y-5 flex flex-col items-center justify-center max-w-[500px]'}>
                        <TitleFontText className={'self-start text-3xl 2xl:text-4xl'}>
                            Herzlich Willkommen
                        </TitleFontText>
                        <FontText className={'text-base 2xl:text-xl'}>
                            Mein Name ist Sina ich bin X Jahre alt. Zu meiner Familie gehören mein Mann Tino und unsere
                            Kinder Milan und Anissa. Während meiner Elternzeit entschied ich mich, meinen Traum zu
                            verwirklichen: eine eigene Kindertagespflege. Mit viel Freude und Herz begleite ich Kinder
                            auf ihrem Weg, zeige ihnen die Welt in all ihren Farben und fördere sie individuell. Meine
                            Pflegeerlaubnis vom Jugendamt habe ich im Oktober 2024 erhalten.
                        </FontText>
                        <button
                            type={'button'}
                            className={
                                'self-start ring-2 cursor-pointer rounded-xl bg-white  ring-black p-2 hover:bg-black hover:text-white duration-300'
                            }
                        >
                            <FontText className={'hidden md:flex text-base 2xl:text-xl'}>
                                Anfragen unter 0123/45678910
                            </FontText>
                            <FontText className={'md:hidden flex text-base 2xl:text-xl'}>Direkt anfragen</FontText>
                        </button>
                    </div>
                </div>
                <GreenGrass />
            </ColorSection>

            <ColorSection direction={'col-reverse'} color={'bg-pastel-green'}>
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <ImageSection vertical={false} src={penStock} alt={'kid hand writing a picute'} />
                <GreenButterfly />
            </ColorSection>

            <ColorSection direction={'row'} color={'bg-pastel-beige'}>
                <ImageSection vertical={false} src={penStock} alt={'kid hand writing a picute'} />
                <TextSection title={'Über mich'}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus aperiam aspernatur ducimus ea
                    enim esse eum illo illum inventore modi, mollitia nemo neque officia possimus quas tempora ut
                    voluptatum. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa dolore expedita quas
                    veritatis vero! Molestiae quae soluta tempora! Culpa cum dolor dolorem et facilis ipsa itaque magnam
                    natus soluta ut!
                </TextSection>
                <PinkButterfly />
            </ColorSection>
        </main>
    );
}
