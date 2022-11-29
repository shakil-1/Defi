import React from 'react';
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';
import AboutCard from './AboutCard';

const About = () => {
    return (
        <div className="w-ful  bg-black  text-white text-center">
            <div className='max-w-[1240px] mx-auto px-4 py-16'>
                <div>
                    <h1 className='py-4'>A Growing protocol Ecosystem</h1>
                    <p className='py-4 text-xl'>The Defi protocol system empowers developrs, liquidity providers, and tranders to participate in a financial marketplace thet is open and accessible to all</p>
                    {/* card container */}
                    <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <AboutCard icon={<SiHiveBlockchain size={40}></SiHiveBlockchain>} heading='Reliable, temper-proof network' text='Use decentralization, trusted nodes, premium data , and cryptographic proofs to connect hightly accurate and avliable data/APis to any smart contarct'></AboutCard>
                        <AboutCard icon={<SiStrapi size={40} />} heading='Seamless connectionto any API' text='Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain.'></AboutCard>
                        <AboutCard icon={<SiFsecure size={40} />} heading='Proven, ready-made solutions' text='Integate pre-built, time-tested oracle solutions that already contact value for market-loadign decentralized applications'></AboutCard>
                        <AboutCard icon={<VscServerProcess size={40} />} heading='Secure off-chain computation' text='Reliable, temper-proof network' text='Use decentralization, trusted nodes, premium data , and cryptographic proofs to connect hightly accurate and avliable data/APis to any smart contarct'></AboutCard>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;