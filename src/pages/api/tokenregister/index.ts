
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import dbConnect from '../../../../utils/dbConnect';

export default async function handler(req: any, res: any) {
  await dbConnect();

  const { name, number, email, password, confirmpassword } = req.body;

  console.log("ENTRIES: ", name, number, email, password, confirmpassword)

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      number,
      email,
      password: hashedPassword,
      confirmpassword: hashedPassword
    });
    res.status(201).json({ success: true, data: user });
  } catch (error: any) {
    res.status(400).json({ success: false, error: error.message });
  }
}
