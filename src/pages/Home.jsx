import Card from "../components/Card"

export default function Home() {
  return (
    <div class="w-full lg:w-5/12 items-center mx-auto space-y-8">
        <div class="space-y-4 pb-56">
            <h1 class="text-5xl font-bold pt-28">
                What is it like to spend $10 billion?
            </h1>

            <p class="text-3xl">
                This is where you can find out!
            </p>

            <button class="p-2 bg-[rgb(125,196,134)] text-[rgb(0,0,0)] rounded-md hover:scale-110 duration-200">
                I want to spend it now
            </button>
        </div>

        <div class="space-y-4 pb-14">
            <h1 class="text-4xl font-bold">
                Spend it all
            </h1>
            <p class="text-2xl">
                Feel free to spend it all, a fraction, or anything in between. Nobody's real money
                is at stake here.
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card rounded={true}>
                    <div class="space-y-8">
                        <img class="rounded-md w-full h-64 object-cover" src="https://www.mymoneycoach.ca/sites/default/files/peer-pressure-spending-money.jpg"/>
                        <div class="space-y-2">
                            <h1 class="text-2xl font-bold">
                                Feel no guilt, just spend it
                            </h1>
                            <p>
                                Beware of your significant other's needs. Bold of me to assume you have one 😂
                            </p>
                        </div>
                    </div>
                </Card>

                <Card rounded={true}>
                    <div class="space-y-8">
                        <img class="rounded-md w-full h-64 object-cover" src="https://i.redd.it/shocked-demoman-v0-pa7lv3mufwoa1.png?width=1440&format=png&auto=webp&s=1ee346a48df19fd6b74c2ccc7e35766dc241ae89"/>
                        <div class="space-y-2">
                            <h1 class="text-2xl font-bold">
                                More choices than your braincells
                            </h1>
                            <p>Prove me wrong?</p>
                        </div>
                    </div>
                </Card>
            </div>
        </div>

        <div class="space-y-4 pb-28">
            <h1 class="text-4xl font-bold">
                But... why?
            </h1>

            <p class="text-2xl">
                Do we have to go through this?
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card rounded={true}>
                    <h1 class="text-2xl font-bold">
                        I can
                    </h1>
                    <p>
                        Let's all be honest here, you are procastinating right now.
                        Don't lie to yourself, you got plenty of time...
                    </p>
                </Card>

                <Card rounded={true}>
                    <h1 class="text-2xl font-bold">
                        Why not
                    </h1>
                    <p>
                        Assuming you got nothing to do, why not spend some of those
                        wasted hours on spending $10 billion?
                    </p>
                </Card>

                <Card rounded={true}>
                    <h1 class="text-2xl font-bold">
                        Uhhh
                    </h1>
                    <p>
                        What's the third reason again? ;-;
                    </p>
                </Card>
            </div>
        </div>

        <div class="space-y-4 pb-28">
            <h1 class="text-4xl font-bold">
                I got bored so I made this
            </h1>
            <p>
                Thanks for visiting this website I made in one night lmao.
                It means a lot to me, this is my second website.
            </p>
        </div>
    </div>
  )
}