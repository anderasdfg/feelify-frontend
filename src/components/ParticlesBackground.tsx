import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import {
    type Container,
    type ISourceOptions,
    // MoveDirection,
    // OutMode,
} from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

const ParticlesBackground = () => {
    const [init, setInit] = useState(false);

    // this should be run only once per application lifetime
    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particlesLoaded = async (container?: Container): Promise<void> => {
        console.log(container);
    };

    const options: ISourceOptions = useMemo(
        () => ({
            background: {
                color: {
                    value: '#000',
                },
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: 'push',
                    },
                    onHover: {
                        enable: true,
                        mode: 'repulse',
                    },
                },
                modes: {
                    push: {
                        quantity: 4,
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4,
                    },
                },
            },
            particles: {
                color: { value: '#ffffff' },
                move: {
                    direction: 'none',
                    enable: true,
                    outModes: 'out',
                    random: false,
                    speed: 2,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    animation: {
                        enable: true,
                        speed: 0.05,
                        sync: true,
                        startValue: 'max',
                        count: 1,
                        destroy: 'min'
                    },
                    value: {
                        min: 0,
                        max: 0.5
                    }
                },
                shape: {
                    type: 'circle'
                },
                size: {
                    value: { min: 1, max: 5 }
                }
            },
            // particles: {
            //     color: {
            //         value: '#ffffff',
            //     },
            //     links: {
            //         color: '#ffffff',
            //         distance: 150,
            //         enable: true,
            //         opacity: 0.5,
            //         width: 1,
            //     },
            //     move: {
            //         direction: MoveDirection.none,
            //         enable: true,
            //         outModes: {
            //             default: OutMode.out,
            //         },
            //         random: false,
            //         speed: 6,
            //         straight: false,
            //     },
            //     number: {
            //         density: {
            //             enable: true,
            //         },
            //         value: 80,
            //     },
            //     opacity: {
            //         value: 0.5,
            //     },
            //     shape: {
            //         type: 'circle',
            //     },
            //     size: {
            //         value: { min: 1, max: 5 },
            //     },
            // },
            detectRetina: true,
        }),
        [],
    );

    if (init) {
        return (
            <Particles
                id="tsparticles"
                className="particles-background"
                particlesLoaded={particlesLoaded}
                options={options}
            />
        );
    }

    return <></>;
};

export default ParticlesBackground;