"use client"

import { Card, CardContent } from '@/components/ui/card'

const SignInView = () => {
    return (
        <div className="flex flex-col gap-6">

            <Card className="overflow-hidden p-0">
                <CardContent className="grid md:grid-cols-2 p-0">

                    <form>col1</form>
                    <div className="bg-radial from-green-700 to-green-900 relative hidden md:flex flex-col items-center justify-center gap-y-4">
                        <img src="/logo.svg" alt="Logo" className="w-23 h-23" />
                        <p className="text-2xl font-semibold text-white">Meet.AI</p>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
}

export default SignInView