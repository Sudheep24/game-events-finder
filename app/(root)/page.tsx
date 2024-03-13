"use client"

import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "../../components/shared/HeroSection";
import { About } from "../../components/shared/About";
import { Games } from "../../components/shared/Games";
import { Button } from "../../components/ui/button";
import { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 

export default function Home() {
    const [renderParticles, setRenderParticles] = useState(false);

    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        await console.log(container);
    }, []);

    useEffect(() => {
        setRenderParticles(true); // Set renderParticles to true after component mounts
    }, []);

    return (
        <main className="relative">
            <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
                {renderParticles && typeof window !== 'undefined' && (
                    <Particles
                        id="tsparticles"
                        init={particlesInit}
                        loaded={particlesLoaded}
                        options={{
                            background: {
                                color: {
                                    value: "#1111",
                                },
                            },
                            fpsLimit: 120,
                            interactivity: {
                                events: {
                                    onClick: {
                                        enable: true,
                                        mode: "push",
                                    },
                                    onHover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                    resize: true,
                                },
                                modes: {
                                    push: {
                                        quantity: 4,
                                    },
                                    repulse: {
                                        distance: 200,
                                        duration: 0.2,
                                    },
                                },
                            },
                            particles: {
                                color: {
                                    value: "#ffffff",
                                },
                                links: {
                                    color: "#ffffff",
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },
                                move: {
                                    direction: "none",
                                    enable: true,
                                    outModes: {
                                        default:"destroy",
                                    },
                                    random: false,
                                    speed: 1.75,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 800,
                                    },
                                    value: 200,
                                },
                                opacity: {
                                    value: 0.1,
                                },
                                shape: {
                                    type: "triangle",
                                },
                                size: {
                                    value: { min: 1, max: 9 },
                                },
                            },
                            detectRetina: true,
                        }}
                    />
                )}
            </div>
            <div className="relative z-10">
                <HeroSection/>
                <About/>
                <Games/>
                <div style={{ position: 'fixed', top: '50%', right: '20px', transform: 'translateY(-50%)' }}>
                    <Link href={'/chatbox'}>
                        <Button variant={"outline"} className="rounded-full bg-slate-100 text-blue-500">Chat</Button>
                    </Link>
                </div>
            </div>
        </main>
    );
}
