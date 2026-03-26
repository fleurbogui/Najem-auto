import { NextRequest, NextResponse } from 'next/server';
import { getCategoriesCollection, Category, ObjectId } from '@/lib/mongodb';

// GET all categories
export async function GET() {
  try {
    const collection = await getCategoriesCollection();
    const categories = await collection.find({}).sort({ name: 1 }).toArray();
    
    return NextResponse.json({ success: true, data: categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to fetch categories' },
      { status: 500 }
    );
  }
}

// POST create new category
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const collection = await getCategoriesCollection();
    
    // Generate slug from name
    const slug = body.name.toLowerCase().replace(/\s+/g, '-');
    
    const category: Omit<Category, '_id'> = {
      name: body.name,
      nameFr: body.nameFr || body.name,
      nameZh: body.nameZh || body.name,
      description: body.description || '',
      descriptionFr: body.descriptionFr || body.description || '',
      descriptionZh: body.descriptionZh || body.description || '',
      icon: body.icon || 'Car',
      slug,
      vehicleCount: 0,
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    const result = await collection.insertOne(category as Category);
    
    return NextResponse.json({ 
      success: true, 
      data: { ...category, _id: result.insertedId } 
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to create category' },
      { status: 500 }
    );
  }
}

// PUT update category
export async function PUT(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, ...updateData } = body;
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Category ID is required' },
        { status: 400 }
      );
    }
    
    const collection = await getCategoriesCollection();
    
    // Update slug if name changed
    if (updateData.name) {
      updateData.slug = updateData.name.toLowerCase().replace(/\s+/g, '-');
    }
    
    const result = await collection.updateOne(
      { _id: new ObjectId(id) },
      { $set: { ...updateData, updatedAt: new Date() } }
    );
    
    if (result.matchedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, data: { id, ...updateData } });
  } catch (error) {
    console.error('Error updating category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to update category' },
      { status: 500 }
    );
  }
}

// DELETE category
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { success: false, error: 'Category ID is required' },
        { status: 400 }
      );
    }
    
    const collection = await getCategoriesCollection();
    const result = await collection.deleteOne({ _id: new ObjectId(id) });
    
    if (result.deletedCount === 0) {
      return NextResponse.json(
        { success: false, error: 'Category not found' },
        { status: 404 }
      );
    }
    
    return NextResponse.json({ success: true, message: 'Category deleted' });
  } catch (error) {
    console.error('Error deleting category:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to delete category' },
      { status: 500 }
    );
  }
}
