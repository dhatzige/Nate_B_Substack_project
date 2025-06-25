'use client'

import * as React from 'react'
import Link from 'next/link'
import { ArrowRight, UserCircle } from 'lucide-react'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

import { NOTES } from '@/lib/data'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function NotesSection() {
  return (
    <section id="notes" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">
            Notes
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            A collection of thoughts, ideas, and works in progress from my
            digital garden.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <Carousel
              opts={{
                align: 'start',
                loop: true,
                dragFree: true,
              }}
              plugins={[WheelGesturesPlugin()]}
              className="w-full"
            >
              <CarouselContent>
                {NOTES.slice(0, 5).map((note) => (
                  <CarouselItem key={note.id} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1 h-full">
                      <Card className="h-full flex flex-col bg-card border border-border shadow-sm rounded-xl">
                        <CardHeader>
                          <div className="flex items-center">
                            <UserCircle className="h-10 w-10 text-muted-foreground mr-4" />
                            <div>
                              <p className="font-semibold text-card-foreground">
                                {note.author}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {note.timestamp}
                              </p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent className="flex-grow">
                          <div className="prose prose-invert max-w-none text-card-foreground whitespace-pre-wrap">
                            <p>{note.content}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 z-10" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 z-10" />
            </Carousel>
          </div>
          <div className="text-center mt-12">
            <Link
              href="https://natesnewsletter.substack.com/notes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-sm font-medium rounded-md text-foreground bg-card hover:bg-muted transition-colors shadow-sm"
            >
              Browse all notes on Substack
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
