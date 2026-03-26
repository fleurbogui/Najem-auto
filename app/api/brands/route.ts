import { NextRequest, NextResponse } from 'next/server';
import { getBrandsCollection, Brand, ObjectId } from '@/lib/mongodb';

// GET all brands
export async function GET() {
  try {
    const collection = await getBrandsCollection();
    const brands = await collection.find({}).sort({ name: 1 }).toArray();
    
    return NextResponse.json({ success: true, data: brands });
  } catch (error) {
    console.error('Error fetching brands:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch brands' },
      { status: 500 }
    );
  }
}

// POST create new brand
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const collection = await getBrandsCollection();
    
    const brand: Omit<Brand, '_id'> = {
      name: body.name,
      logo: body.logo || '',
      description: body.description || '',
      descriptionFr: body.descriptionFr || body.description || '',
      descriptionZh: body.descriptionZh || body.description || '',
      country: body.country || '',
      website: body.website || '',
      featured: body.featured || false,
      vehicleCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await collection.insertOne(brand as Brand);
    
    return NextResponse.json({ 
      success: true, 
      data: { ...brand, _id: result.insertedId } 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating brand:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create brand' },
      { status: 500 }
    );
  }
}

// PUT update brand
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Brand ID is required' },
        { status: 400 }
      );
    }
    
    const collection = await getBrandsCollection();
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Brand not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: { id, ...updateData } });
  } catch (error) {
    console.error('Error updating brand:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update brand' },
      { status: 500 }
    );
  }
}

// DELETE brand
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Brand ID is required' },
        { status: 400 }
      );
    }
    
    const collection = await getBrandsCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Brand not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Brand deleted' });
  } catch (error) {
    console.error('Error deleting brand:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete brand' },
      { status: 500 }
    );
  }
}
