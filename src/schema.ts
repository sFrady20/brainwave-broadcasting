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
      pings: {
        Row: {
          host: boolean
          id: string
          match: string | null
          pinged_at: string
          status: string
        }
        Insert: {
          host?: boolean
          id: string
          match?: string | null
          pinged_at?: string
          status?: string
        }
        Update: {
          host?: boolean
          id?: string
          match?: string | null
          pinged_at?: string
          status?: string
        }
        Relationships: [
          {
            foreignKeyName: "pings_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "pings_match_fkey"
            columns: ["match"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          avatar: string | null
          bio: string
          coins: number
          created_at: string
          id: string
        }
        Insert: {
          avatar?: string | null
          bio?: string
          coins?: number
          created_at?: string
          id: string
        }
        Update: {
          avatar?: string | null
          bio?: string
          coins?: number
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
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
