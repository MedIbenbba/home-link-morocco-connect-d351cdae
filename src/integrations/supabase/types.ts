export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      bookings: {
        Row: {
          booking_date: string | null
          created_at: string | null
          end_date: string | null
          id: string
          landlord_id: string
          monthly_rent: number
          property_id: string
          security_deposit: number | null
          start_date: string
          status: string
          tenant_id: string
          updated_at: string | null
        }
        Insert: {
          booking_date?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          landlord_id: string
          monthly_rent: number
          property_id: string
          security_deposit?: number | null
          start_date: string
          status?: string
          tenant_id: string
          updated_at?: string | null
        }
        Update: {
          booking_date?: string | null
          created_at?: string | null
          end_date?: string | null
          id?: string
          landlord_id?: string
          monthly_rent?: number
          property_id?: string
          security_deposit?: number | null
          start_date?: string
          status?: string
          tenant_id?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "bookings_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          address: string | null
          avatar_url: string | null
          city: string | null
          created_at: string | null
          date_of_birth: string | null
          email: string
          first_name: string | null
          id: string
          last_name: string | null
          phone: string | null
          role: Database["public"]["Enums"]["user_role"]
          updated_at: string | null
        }
        Insert: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email: string
          first_name?: string | null
          id: string
          last_name?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Update: {
          address?: string | null
          avatar_url?: string | null
          city?: string | null
          created_at?: string | null
          date_of_birth?: string | null
          email?: string
          first_name?: string | null
          id?: string
          last_name?: string | null
          phone?: string | null
          role?: Database["public"]["Enums"]["user_role"]
          updated_at?: string | null
        }
        Relationships: []
      }
      properties: {
        Row: {
          address: string
          amenities: string[] | null
          area_sqm: number | null
          bathrooms: number | null
          bedrooms: number | null
          city: string
          created_at: string | null
          description: string | null
          id: string
          images: string[] | null
          is_available: boolean | null
          is_furnished: boolean | null
          is_verified: boolean | null
          landlord_id: string
          price_per_month: number
          property_type: string
          title: string
          updated_at: string | null
        }
        Insert: {
          address: string
          amenities?: string[] | null
          area_sqm?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city: string
          created_at?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          is_furnished?: boolean | null
          is_verified?: boolean | null
          landlord_id: string
          price_per_month: number
          property_type: string
          title: string
          updated_at?: string | null
        }
        Update: {
          address?: string
          amenities?: string[] | null
          area_sqm?: number | null
          bathrooms?: number | null
          bedrooms?: number | null
          city?: string
          created_at?: string | null
          description?: string | null
          id?: string
          images?: string[] | null
          is_available?: boolean | null
          is_furnished?: boolean | null
          is_verified?: boolean | null
          landlord_id?: string
          price_per_month?: number
          property_type?: string
          title?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      reviews: {
        Row: {
          booking_id: string | null
          comment: string | null
          created_at: string | null
          id: string
          property_id: string | null
          rating: number
          review_type: string
          reviewee_id: string
          reviewer_id: string
        }
        Insert: {
          booking_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          property_id?: string | null
          rating: number
          review_type: string
          reviewee_id: string
          reviewer_id: string
        }
        Update: {
          booking_id?: string | null
          comment?: string | null
          created_at?: string | null
          id?: string
          property_id?: string | null
          rating?: number
          review_type?: string
          reviewee_id?: string
          reviewer_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "reviews_booking_id_fkey"
            columns: ["booking_id"]
            isOneToOne: false
            referencedRelation: "bookings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "reviews_property_id_fkey"
            columns: ["property_id"]
            isOneToOne: false
            referencedRelation: "properties"
            referencedColumns: ["id"]
          },
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
      user_role: "tenant" | "landlord" | "admin"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      user_role: ["tenant", "landlord", "admin"],
    },
  },
} as const
