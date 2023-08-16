export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      flukx: {
        Row: {
          id: number
          word: string | ''
        }
        Insert: {
          id: number
          word?: string | ''
        }
        Update: {
          id?: number
          word?: string | ''
        }
        Relationships: []
      }
      flukx_redirects: {
        Row: {
          id: string
          short_link: string
          redirect: string
        }
        Insert: {
          id?: string
          short_link: string
          redirect?: string
        }
        Update: {
          id?: string
          short_link?: string
          redirect?: string
        }
        Relationships: []
      }
      pages: {
        Row: {
          content: string
          created_at: string
          id: string
          pages: string
        }
        Insert: {
          content?: string
          created_at?: string
          id?: string
          pages?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          pages?: string
        }
        Relationships: []
      }
      socio: {
        Row: {
          content: string
          created_at: string
          id: string
        }
        Insert: {
          content?: string
          created_at?: string
          id?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
        }
        Relationships: []
      }
      words: {
        Row: {
          id: number
          word: string | null
        }
        Insert: {
          id: number
          word?: string | null
        }
        Update: {
          id?: number
          word?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
