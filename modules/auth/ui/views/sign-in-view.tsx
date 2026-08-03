"use client"

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldLegend,
    FieldSeparator,
    FieldSet,
    FieldTitle,
} from "@/components/ui/field"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { OctagonAlertIcon } from "lucide-react";


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